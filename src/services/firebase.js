import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user.length > 0 ? user : false;
}

export async function getUserByUserId(id=0) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", id)
    .get();
  
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getUserFollowedPhotos(userId, followingUserIds=[]) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", followingUserIds)
    .get();
  
    const userFollowedPhotos = result.docs.map((item) => ({
      ...item.data(),
      docId: item.id,
    }));

    const photosWithUserDetails = await Promise.all(
      userFollowedPhotos.map(async (photo) => {
        let userLikedPhoto = false;
        if (photo.likes.includes(userId)) {
          userLikedPhoto = true;
        }
        const user = await getUserByUserId(photo.userId);
        const username = user[0].username;
        return { username, ...photo, userLikedPhoto };
      })
    );
  
  return photosWithUserDetails;
}

export async function getSuggestedProfiles(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .limit(3)
    .get();

    //First, get the array of whom the current user already follows
    const [{following}] = result.docs
    .map(user => user.data())
    .filter(profile => profile.userId === userId)
    
    //Suggest people not already followed, and not self
    let suggestedProfiles = result.docs
      .map(user => ({ ...user.data(), docId: user.id }))
      .filter(profile => profile.userId !== userId && !following.includes(profile.userId));

  return suggestedProfiles;
}

export async function updateUserFollowing(docId, profileId, isFollowingProfile){
    return firebase
      .firestore()
      .collection("users")
      .doc(docId)
      .update({
        following: isFollowingProfile
          //If already following, unfollow
          ? FieldValue.arrayRemove(profileId)
          //If not yet following, follow now
          : FieldValue.arrayUnion(profileId),
      });
}

export async function updateFollowedUserFollowers(docId, followingUserId, isFollowingProfile) {
    return firebase
      .firestore()
      .collection("users")
      .doc(docId)
      .update({
        following: isFollowingProfile
          //Likewise, update the arrays of the person I follow/unfollow
          ? FieldValue.arrayRemove(followingUserId)
          : FieldValue.arrayUnion(followingUserId),
      });
}

export async function getPhotosByUsername(username) {
  const user = await getUserByUsername(username);
  const [{ userId }] = user;

  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", userId)
    .get()

  const photos = result.docs.map(item => ({...item.data(), docId: item.docId}))
  return photos.length > 0 ? photos : null;
}

export async function toggleFollow(
  isFollowing,
  currentUserDocId,
  currentUserId,
  targetUserDocId,
  targetProfileId
) {
  //First, update docs for the active user
  await updateUserFollowing(currentUserDocId, currentUserId, isFollowing);
  //Then, update the target user's docds
  await updateFollowedUserFollowers(targetUserDocId, currentUserId, isFollowing);
}
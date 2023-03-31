const fetchDeleteStatus = async () => {
    let docRef = await firestore
      .collection("topic")
      .doc(groupAdminId)
      .collection("comments")
      .where("userAuthId", "==", currentUser.id)
      .get();

    if (docRef.empty) {
      console.log("NO DATA");
    } else {
      console.log("AVAI DATA");
      console.log(docRef.empty);
    }

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("HERE 0000", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document 0000000!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  data.docs.forEach((item) => {
    let id = item.id;
    let data = item.data();
    console.log("DATA HEREEE", data);
    // myGroup.push({ id, ...data });
  });
  };
import React, { useState, useContext, useEffect } from "react";
import SelectProfilesContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";

export default function BrowseContainer({ slide }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displatName]);

  return <SelectProfilesContainer user={user} setProfile={setProfile} />;
}

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../../../shared/Input";
import Submit from "../../../../shared/Submit";
export default () => {
  const [Title, setTitle] = React.useState("");
  const [Body, setBody] = React.useState("");

  function handleSubmit() {
    const announcement = {
      Title,
      Body,
    };
    // TODO 
    // make an http post request here
    console.log("HEEEEEEH , this is the announcet LOL", announcement);
  }

  return (
    <View style={styles.root}>
      <Input label="Title" style={{margin: 0}} value={Title} setValue={setTitle} />
      <Input label="Body" style={{margin: 0}} numberOfLines={3} value={Body} setValue={setBody} />
      <Submit handleSubmit={handleSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});

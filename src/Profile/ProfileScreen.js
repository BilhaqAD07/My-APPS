import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.bootdey.com/image/900x400/303030' }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/ddraodqz5/image/upload/v1664331064/DSC_0103_b_pzic4p.webp' }}
          style={styles.avatar}
        />
        <Text style={[styles.name, styles.textWithShadow]}>Bilhaq Avi Dewantara</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Github:</Text>
          <Text style={styles.infoValue}>https://github.com/BilhaqAD07</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>Indonesia</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoValue}>Result-driven Informatics Engineering sutdent from Sumatera Institute of Technology passionate on develop user- friendly software. Good problem-solving, fast learner, and ability to perform well in a team.</Text>
          <Text style={styles.infoValue}></Text>
          <Text style={styles.infoValue}>"Never Give Up, Fix Problems, Keep Going".</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});

export default ProfileScreen;
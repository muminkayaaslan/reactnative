import React, { act, useState } from 'react';
import { StyleSheet, Modal, Dimensions, View } from 'react-native';
import { Drawer } from 'react-native-paper';

type ProfileDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

export function ProfileDrawer({ visible, onClose }: ProfileDrawerProps) {
  const [active, setActive] = useState('');
  if (!visible) return null;
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = 300;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onDismiss={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.drawer, { width: drawerWidth }]}>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              label="First Item"
              active={active === 'first'}
              onPress={() => {
                setActive('first');
                onClose(); // Fonksiyonu çağır
              }}
            />
            <Drawer.Item
              label="Second Item"
              active={active === 'second'}
              onPress={() => {
                setActive('second');
                onClose(); // Fonksiyonu çağır
              }}
            />
            <Drawer.Item
              label="Third Item"
              active={active === 'third'}
              onPress={() => {
                setActive('third');
                onClose(); // Fonksiyonu çağır
              }}
            />
          </Drawer.Section>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planı yarı saydam yap
    justifyContent: 'flex-start',
  },
  drawer: {
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  drawerSection: {
    marginTop: 20,
  },
});

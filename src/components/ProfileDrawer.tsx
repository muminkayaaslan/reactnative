import React, { useState } from 'react';
import { Drawer } from 'react-native-paper';

export function ProfileDrawer() {
  const [active, setActive] = useState('');

  return (
    <Drawer.Section>
      <Drawer.Item></Drawer.Item>
    </Drawer.Section>
  );
}

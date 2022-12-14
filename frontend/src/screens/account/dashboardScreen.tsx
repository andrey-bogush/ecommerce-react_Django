import React from 'react';
import Background from '../../components/common/background';
import Header from '../../components/common/header';
import Paragraph from '../../components/common/paragraph';

import { Button } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';
import { AccountStackNavigatorParamList } from '../../types';

export default function Dashboard({
  navigation,
}: {
  navigation: StackNavigationProp<AccountStackNavigatorParamList>;
}) {
  return (
    <Background>
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor
        and start editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}

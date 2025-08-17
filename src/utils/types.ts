import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamsList = {
  navigate(arg0: string, arg1: { movieId: string }): unknown;
  Splash: undefined;
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Details: { movieId: string };
  ProfileSettings: undefined;
};

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  'Details'
>;

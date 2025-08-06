import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamsList = {
  navigate(arg0: string, arg1: { movieId: string }): unknown;
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Details: { movieId: string };
};

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  'Details'
>;

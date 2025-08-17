import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import { StackParamsList } from '../utils/types';
import { fetchMovieWithId } from '../services/api';
import { CommentProvider, useComments } from '../constants/commentsContext';

type DetailScreenProp = RouteProp<StackParamsList, 'Details'>;
export function DetailContent({ route }: { route: DetailScreenProp }) {
  const { movieId } = route.params;
  const [mvLoading, setMvLoading] = useState(true);
  const [movie, setMovie] = useState<any>(null);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieWithId(movieId);
        setMovie(data);
      } catch (err) {
        console.error('Film yüklenirken hata:', err);
      } finally {
        setMvLoading(false);
      }
    };
    getMovie();
  }, [movieId]);
  const { comments, loading, error } = useComments();
  if (mvLoading) {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      </View>
    );
  }
  if (!movie) {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.text}>Film Bulunamadı</Text>
        </View>
      </View>
    );
  }
  if (comments.length === 0) {
    return (
      <View style={styles.screen}>
        <View style={styles.headCard}>
          <Image style={styles.moviePoster} source={{ uri: movie.poster }} />
          <View>
            <Text style={styles.text}>{movie.title}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>
            Henüz Yorum Yok 🫤
          </Text>
        </View>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={styles.screen}>
        <View style={styles.headCard}>
          <Image style={styles.moviePoster} source={{ uri: movie.poster }} />
          <Text style={styles.text}>{movie.title}</Text>
        </View>
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <View style={styles.headCard}>
        <Image style={styles.moviePoster} source={{ uri: movie.poster }} />
        <View style={styles.mvInfo}>
          <Text style={styles.text}>{movie.title}</Text>
          <Text style={styles.text}> Directors: {movie.directors}</Text>
          <Text style={styles.text}>{'IMDB > (RATING,VOTES,ID)'}</Text>
          <Text style={(styles.text, { textAlign: 'center', color: 'white' })}>
            ({movie.imdb.rating},{movie.imdb.votes},{movie.imdb.id})
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: '95%',
            backgroundColor: 'rgba(255, 255, 255, 0.16)',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 7,
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            {' '}
            Comments
          </Text>
        </View>

        <FlatList
          data={comments}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            const parsedDate = new Date(item.date);
            const formattedDate =
              parsedDate.toLocaleDateString('tr-TR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }) +
              ' - ' +
              parsedDate.toLocaleTimeString('tr-TR', {
                hour: '2-digit',
                minute: '2-digit',
              });
            return (
              <View style={styles.item}>
                <Text style={styles.iTitle}>{item.name}</Text>
                <Text style={styles.iText}>{item.text}</Text>
                <Text style={styles.iDate}>{formattedDate}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  headCard: {
    backgroundColor: 'rgb(118,92,205)',
    borderColor: '#e171fd',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'red',
    flex: 0.5,
    borderRadius: 9,
  },
  moviePoster: {
    width: '50%',
    height: '80%',
    padding: 25,
    borderRadius: 8,
    resizeMode: 'stretch',
    elevation: 50,
  },
  item: {
    height: 200,
    borderColor: 'white',
    alignContent: 'center',
    borderWidth: 1,
    backgroundColor: 'gray',
    margin: 10,
    borderRadius: 8,
    padding: 5,
  },
  iText: {
    color: 'white',
    fontSize: 16,
    margin: 5,
  },
  iTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  iDate: {
    position: 'absolute',
    bottom: 9,
    end: 9,
    color: 'white',
  },
  mvInfo: {
    flexDirection: 'column',
    verticalAlign: 'middle',
    margin: 5,
    padding: 2,
    textAlign: 'center',
  },
});

function Detail({ route }: { route: DetailScreenProp }) {
  const { movieId } = route.params;
  return (
    <CommentProvider movieId={movieId}>
      <DetailContent route={route} />
    </CommentProvider>
  );
}

export default Detail;

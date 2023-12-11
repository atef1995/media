import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from './AlbumsListItem';


function AlbumsList({ user }) {
  const { data, error, isLoading, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation()

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3}></Skeleton>
  } else if (error) {
    content = <div>error</div>
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>
    });
  }
  return <div>
    Albums for {user.name}
    <Button onClick={handleAddAlbum} loading={results.isLoading}>+ Add Album</Button>
    <>{content}</>
  </div>;
}

export default AlbumsList;

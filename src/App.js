
import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="joeelfelipe"
          description="Brecker o goleiro"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="joeelfelipe"
          description="Gato olhando para a camera"
          music="clap your hands"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/bird.mp4?alt=media&token=38b50871-393f-4fa4-9951-c6fc08af7e9e"
        />
      </div>
    </div>
  );
}

export default App;

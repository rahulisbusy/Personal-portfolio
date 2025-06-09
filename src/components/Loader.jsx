import { Html,useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p
      style={{
        fontSize: '14px',
        color: '#f1f1f1',
        fontWeight: 800,
        textAlign: 'center',
        marginTop: '40px'
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
  
};

export default CanvasLoader;
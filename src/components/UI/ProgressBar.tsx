import zIndex from "@mui/material/styles/zIndex";

const ProgressBar = ({progress}:{progress:number}) => {

  const container = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.1)',
    zIndex: 2
  }
  const containerStyles = {
    height: 15,
    width: '100%',
    maxWidth: '300px',
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: 50,
    zIndex: 3,
    overflow: 'hiden'
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'all 300ms ease'
  }

  const labelStyles = {
    padding: 5,
    color: 'whitergba(0,0,0,.5)',
    fontWeight: 'bold'
  }

  return (
    <div style={container}>
    <span style={labelStyles}>{`${progress}%`}</span>
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
    </div>
  );
}

export default ProgressBar;
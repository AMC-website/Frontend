import { BorderAllRounded, Spellcheck } from '@mui/icons-material';
import { borderRadius } from '@mui/system';

export const form = {
    borderRadius: '15px' as const,
    border: 'solid 3px black' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'start' as const,
    width: '800px' as const,
    height: '600px' as const,
    margin: '0px auto 0px auto' as const,
    background: 'black' as const,
    padding: '15px' as const,
};

export const header = {
    backgroundColor: 'green',
    padding: '15px 30px',
};

export const headerH1 = {
    color: 'white',
    fontWeight: 200,
};

export const footer = {
    position: 'fixed',
    textAlign: 'center',
    bottom: 0,
    width: '100%',
    height: '2.5rem',
};

export const footerP = {
    color: 'grey',
};

export const note = {
    background: 'whitesmoke',
    borderRadius: '9px',
    border: 'solid 2px black',
    color: 'white',
    padding: '10px',
    width: '240px',
    margin: '16px',
    float: 'left',
};

export const noteH1 = {
    fontSize: '1.1em',
    marginBottom: '6px',
};

export const noteP = {
    fontSize: '1.1em',
    marginBottom: '10px',
    whiteSpace: 'pre-wrap' as const,
    wordWrap: 'break-word' as const,
};

export const noteButton = {
    position: 'relative',
    float: 'right',
    marginRight: '10px',
    color: 'orange',
    border: 'none',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    outline: 'none',
};
export const projectInput = {
    width: '100%',
    border: 'solid 2px white',
    padding: '4px',
    outline: 'none',
    fontSize: '1.2em',
    fontFamily: 'inherit',
    resize: 'none' as const,
    backgroundColor: 'white',
    color: 'black',
    marginTop: '40px',
    borderRadius: '10px',
};

export const formInput = {
    width: '100%',
    color: 'black',
    border: 'solid 2px black',
    padding: '4px',
    outline: 'none',
    fontSize: '1.2em',
    fontFamily: 'inherit',
    resize: 'none' as const,
    height: '50px',
    marginTop: '40px',
    backgroundColor: 'white',
    Spellcheck: 'false',
    borderRadius: '10px',
};

export const formTextarea = {
    width: '100%',
    color: 'black',
    border: 'none',
    padding: '4px',
    outline: 'none',
    fontSize: '1.2em',
    fontFamily: 'inherit',
    resize: 'none' as const,
    marginTop: '40px',
    backgroundColor: 'white',
    Spellcheck: 'false',
    borderRadius: '10px',
};

export const formButton = {
    background: 'rgb(189, 28, 28)' as const,
    position: 'absolute' as const,
    marginTop: '550px',
    color: 'black',
    border: 'none',
    // borderRadius: "10%",
    width: '600px',
    height: '50px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgb(23, 22, 22)',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '10px',
};

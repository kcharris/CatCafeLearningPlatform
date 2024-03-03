import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function UploadFile(){
    let res = (
        <div className="uploadFile">
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                className="uploadButton"
            >
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
        </div>
    )
    return res
}

export default function Upload(){
    let res = <div className = "upload-wrapper">
        <UploadFile/>
    </div>
    return res
}
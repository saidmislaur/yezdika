import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../admin.module.scss'
import axios from 'axios';
import { Modal } from './Modal';


const FolklorsList = ({data}) => {

    const [folklor, setFolklor] = useState([])
    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [toogleForm, setToogleForm] = useState(false);
    const onRemove = (id) => {
        try {
          axios.delete(`http://localhost:5050/folklor/${id}`);
          setFolklor((prev) => prev.filter((item) => (item.id) !== (id)));
        } catch (error) {
          alert('ошибка удаления');
        }
      };


    const addFolklor = (img = null) => {
      try {
        const formData = new FormData();
        formData.append('image', img);
        formData.append('title', titleValue);
        formData.append('text', textValue)
          const { data } = axios.post(
              `http://localhost:5050/folklor`,
              formData,
          );
          setFolklor([...folklor, data])
          setTextValue('');
          setTitleValue('');
          alert('добавлено')
      } catch (error) {
        alert(error);
      }
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        setSelectedFile(files[0])
    }

    const handleClick = () => {
        addFolklor(selectedFile)
    }

    return (
        <div className={styles.topbar_folklorList}>
            <Stack direction="row" spacing={2}>
                <Button 
                style={{marginLeft: "20px"}} 
                variant="contained" 
                onClick={() => setToogleForm(true)}>добавить</Button>
            </Stack>
            {data.map((item) => (
                <Card style={{display: 'inline-block', marginLeft: '20px', marginTop: '20px'}} key={item.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={`http://localhost:5050/${item.pathImages}`}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.text.length > 250 ? `${item.text.substring(0, 200)}...` : item.text}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="outlined" startIcon={<EditIcon />}>
                            Изменить
                        </Button>
                        <Button onClick={() => onRemove(item._id)} variant="outlined" color="error" startIcon={<DeleteIcon />} >
                            Удалить
                        </Button>
                    </CardActions>
                </Card>
            ))}
            {toogleForm && <Modal 
                toogleForm={toogleForm} 
                setToogleForm={setToogleForm} 
                value={titleValue}
                textValue={textValue}
                imageValue={image}
                onAdd={handleClick}
                onChange={(e) => setTitleValue(e.target.value)}
                onChangeText={(e) => setTextValue(e.target.value)}
                onChangeImage={uploadImage}/>}

        </div>
    )
}

export default FolklorsList

import React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/admin.module.scss'
import AddButton from '../../components/Admin/Addbutton';
import axios from 'axios';
const FolklorsList = ({data, setFolklors}) => {
    const onRemove = (id) => {
        try {
          axios.delete(`http://localhost:4000/folklor/${id}`);
          setFolklors((prev) => prev.filter((item) => (item.id) !== (id)));
        } catch (error) {
          alert('ошибка удаления');
        }
      };

    return (
        <div className={styles.topbar_folklorList}>
            <Link href="/admin/addpost">
                <a>
                    <AddButton text="добавить запись"/>
                </a>
            </Link>
            {data.map((item) => (
                <Card style={{display: 'inline-block', marginLeft: '20px', marginTop: '20px'}} key={item.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.image}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="outlined" startIcon={<EditIcon />}>
                            Изменить
                        </Button>
                        <Button onClick={(id) => onRemove(item.id)} variant="outlined" color="error" startIcon={<DeleteIcon />} >
                            Удалить
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default FolklorsList

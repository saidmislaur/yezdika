import React from 'react'
import Link from 'next/link'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../admin.module.scss'
import AddButton from '../Addbutton';

const PostLists = ({posts, removePost}) => {
    return (
        <div className={styles.topbar_postlist}>
             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 150 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Заголовок</TableCell>
                        <TableCell align="center">Дата публикации</TableCell>
                        <TableCell align="center">Действия</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {posts.map((post) => (
                        <TableRow
                            key={post.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                            >
                            <TableCell component="th" scope="row">
                                {post.id}
                            </TableCell>
                            <TableCell align="center">{post.title}</TableCell>
                            <TableCell align="center">{post.published}</TableCell>
                            <TableCell align="center">
                            <Button variant="contained" color="success">
                                Изменить
                            </Button>
                            <Button style={{border: 'none'}} variant="outlined" color="error" startIcon={<DeleteIcon onClick={() => removePost(post._id)} />} >
                            </Button> 
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link href="/admin/addpost">
                <a>
                    <AddButton text="добавить статью"/>
                </a>
            </Link>
        </div>
    )
}

export default PostLists

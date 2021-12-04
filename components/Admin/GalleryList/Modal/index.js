import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './modal.module.scss';

export const Modal = ({setToogleForm, onAdd, descValue, imageValue, onChangeText, onChangeImage}) => {

    return (
        <div className={styles.modal} onClick={() => setToogleForm(false)}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <form action="">
                    <div>
                        <input 
                            type="file" 
                            name="file"
                            placeholder="добавить картинку"
                            value={imageValue} 
                            onChange={onChangeImage} />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="text"
                            value={descValue}
                            onChange={onChangeText} 
                        />
                    </div>
                    <div className={styles.modal_content__button}>
                    <Stack direction="row" spacing={2}>
                        <Button 
                        style={{marginLeft: "20px"}} 
                        variant="contained"
                        onClick={onAdd}>
                            добавить</Button>
                    </Stack>
                    </div>
                </form>
            </div>
        </div>
    )
}
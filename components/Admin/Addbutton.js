import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'

export default function AddButton({text, addPost}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={addPost}>{text}</Button>
    </Stack>
  );
}
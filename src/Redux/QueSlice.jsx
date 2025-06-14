import { createSlice } from '@reduxjs/toolkit';
import Que from '../db/Que';
const QueSlice = createSlice({
name : 'Que',
initialState: Que,
})

export default QueSlice.reducer;
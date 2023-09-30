import { createAsyncThunk } from '@reduxjs/toolkit'
import { quanLyDatVeServices } from 'services'
import { sleep } from 'utils'
import { bookingPayload, danhSachVe } from '../../types/QuanLyDatVe'

export const bookingThunk = createAsyncThunk(
    'quanLyDatVe/booking',
    async (payload: bookingPayload<danhSachVe>, { rejectWithValue }) => {
        try {
            debugger
            const data = await quanLyDatVeServices.book(payload)
            // console.log('data: ', data.data.content)

            // sleep 3s
            // await new Promise(resolve => setTimeout(resolve, 3000))
            await sleep(2000)

            return data.data.content;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
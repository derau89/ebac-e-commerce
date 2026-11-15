import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Guide } from '../types/guide';

const initialState: Guide[] = (() => {
  try {
    const storedGuides = localStorage.getItem('guides');
    return storedGuides ? JSON.parse(storedGuides) : [];
  } catch {
    return [];
  }
})();

const guidesSlice = createSlice({
  name: 'guides',
  initialState,
  reducers: {
    setGuides: (_state, action: PayloadAction<Guide[]>) => action.payload,
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.push(action.payload);
      
    },

    deleteGuide: (state, action: PayloadAction<string>) => {
      return state.filter(guide => guide.numeroGuia !== action.payload);
    },
    updateGuideStatus: (
  state,
  action: PayloadAction<{
    numeroGuia: string;
    nuevoEstado: Guide['estado'];
  }
 
  >,
) => {
  const guide = state.find(
    (g) => g.numeroGuia === action.payload.numeroGuia,
  );

  if (guide) {
    guide.estado = action.payload.nuevoEstado;
    guide.historial.push({
      date: new Date().toLocaleString(),
      status: action.payload.nuevoEstado,
    });
  }
},
},
});

export const { setGuides, addGuide, updateGuideStatus, deleteGuide } = guidesSlice.actions;
export default guidesSlice.reducer;
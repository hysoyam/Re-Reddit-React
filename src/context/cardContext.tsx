import React from 'react';
import { ICardData } from '../hooks/usePostsData';

export const cardContext = React.createContext<ICardData | null>(null)


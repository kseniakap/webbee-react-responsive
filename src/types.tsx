import { ReactElement, ReactNode } from 'react'

type ResolutionType = number | `${number}dppx`;

export interface MediaQueries{
    orientation?: 'landscape' | 'portrait';
    minResolution?:  ResolutionType;
    maxResolution?:  ResolutionType;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
};

export enum MediaQueryEnum {
    orientation = "orientation",
    minResolution = "min-resolution",
    maxResolution = "max-resolution",
    minWidth = "min-width",
    maxWidth = "max-width",
    minHeight = "min-height",
    maxHeight = "max-height",
  }

export interface MediaQueryProps extends Partial<MediaQueries> {
    children: ((match: boolean) => ReactElement)|  ReactNode ;
}
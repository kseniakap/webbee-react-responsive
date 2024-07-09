import {ReactNode } from 'react'

type ResolutionType = number | `${number}dppx`;
type NumberType = number | `${number}px`;

export interface MediaQueries{
    orientation?: 'landscape' | 'portrait';
    minResolution?:  ResolutionType;
    maxResolution?:  ResolutionType;
    minWidth?: NumberType;
    maxWidth?: NumberType;
    minHeight?: NumberType;
    maxHeight?: NumberType;
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
    children: ((match: boolean) => ReactNode)|  ReactNode ;
}
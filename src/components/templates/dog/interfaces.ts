export interface IDogProps {}

export interface IPosition {
    position: {
        top: number;
        left: number;
    };
}

export interface IDogInfo {
    position: number;
    direction: 'RIGHT' | 'LEFT' | 'TOP' | 'BOTTOM';
}

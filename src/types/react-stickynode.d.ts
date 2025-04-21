declare module 'react-stickynode' {
    import { ComponentType, ReactNode } from 'react';

    interface StickyProps {
        enabled?: boolean;
        top?: number;
        bottomBoundary?: number | string;
        innerZ?: number;
        activeClass?: string;
        releasedClass?: string;
        onStateChange?: (status: { status: number }) => void;
        children?: ReactNode;
        className?: string;
    }

    const Sticky: ComponentType<StickyProps>;

    export default Sticky;
} 
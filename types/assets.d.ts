// Type declarations for Three.js assets
declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.gltf' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

// Meshline module declarations
declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// JSX intrinsic elements for meshline
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {};
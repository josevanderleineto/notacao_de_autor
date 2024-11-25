declare module 'react-copy-to-clipboard' {
    import * as React from 'react';
  
    interface Props {
      text: string;
      onCopy?: (text: string, result: boolean) => void;
      options?: {
        debug?: boolean;
        message?: string;
      };
    }
  
    export class CopyToClipboard extends React.Component<Props> {}
  }
import React from 'react';

import { LanguageContext } from '../context';

export function withLanguage(Component) {
  return (props, context) => {
    return (
      <LanguageContext.Consumer>
        {value => {
          return <Component {...props} lang={value} />;
        }}
      </LanguageContext.Consumer>
    );
  };
}

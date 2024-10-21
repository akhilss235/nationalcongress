
import React, { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,ta',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          }, 'google_translate_element');
          console.log('Google Translate initialized');
        };
      }

      if (!document.querySelector('#google-translate-script')) {
        const addScript = document.createElement('script');
        addScript.id = 'google-translate-script';
        addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(addScript);
        console.log('Google Translate script added');
      } else {
        console.log('Google Translate script already added');
      }
    };

    loadGoogleTranslate();
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          marginLeft: '15px',
          padding: '5px',
          borderRadius: '5px',
          backgroundColor: '#f8f9fa',
          color: '#203583',
          border: '1px solid #ddd',
          position: 'fixed', 
          right: '10px', 
          zIndex: '9999',
        }}
      />
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;


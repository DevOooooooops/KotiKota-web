export const fileToBase64 = (file: File) =>
  new Promise(resolve => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e && e.target) {
          const base64String = e?.target.result;
          resolve(base64String?.toString() || '');
        }
      };
      reader.readAsDataURL(file);
    }
  }) as Promise<string>;

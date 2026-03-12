import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';
import awsExports from '../src/aws-exports';

const UploadImage = ({ setUrl }) => {
  const [file, setFile] = useState(null);
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [buttonText, setButtonText] = useState('Upload Your Profile Pic');
  const [errorMessage, setErrorMessage] = useState(null);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[\s_-]+/g, '-');

  const uploadFile = async () => {
    if (!file) return;

    const cleanName = slugify(file.name);
    const key = `images/${cleanName}`;
    setUploadingStatus(true);
    setErrorMessage(null);

    try {
      const res = await Storage.put(key, file, {
        contentType: file.type,
        level: 'public',
      });

      const storedKey = res?.key ?? res?.params?.Key ?? key;
      const bucket = awsExports.aws_user_files_s3_bucket;
      const region = awsExports.aws_user_files_s3_bucket_region ?? awsExports.aws_project_region ?? 'us-east-1';
      const path = String(storedKey).startsWith('public/') ? storedKey : `public/${storedKey}`;
      const publicUrl = `https://${bucket}.s3.${region}.amazonaws.com/${path}`;

      setUrl(publicUrl);
      setButtonText('Uploaded!');
    } catch (err) {
      console.error('Error uploading profile image:', err);
      setButtonText('Error!');
      setErrorMessage('Error uploading. Please email bianca@packagingschool.com for support.');
    } finally {
      setUploadingStatus(false);
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  return (
    <div className='text-ap-blue border-2 font-bold border-ap-blue py-3 px-6 rounded-lg cursor-pointer'>
      <p>{uploadingStatus ? 'Uploading...' : buttonText}</p>
      {errorMessage && (
        <p className='mt-1 text-sm text-red-600'>{errorMessage}</p>
      )}
      <input
        type='file'
        accept='image/*'
        name='profile'
        id='profile'
        className='sr-only'
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
};

export default UploadImage;

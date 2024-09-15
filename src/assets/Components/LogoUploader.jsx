import { MdOutlineFileUpload } from "react-icons/md";
function LogoUploader({ setLogoSrc, backgroundColor }) {

  const bgClasses = {
    '#007BFF20': 'bg-blue-600',
    '#FFC0CB20': 'bg-pink-600',
    '#FFFF0020': 'bg-yellow-600',
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-fit upload-logo h-12">
      <input className='w-full opacity-0 cursor-pointer' type="file" id="logoUpload" accept="image/*" onChange={handleLogoUpload} />
      <div className={`absolute z-[-1] top-0 w-full h-full flex items-center justify-between px-20 text-white ${bgClasses[backgroundColor]}`}>
        <div className="text-xl text-white">
        <MdOutlineFileUpload />
        </div>
        <h1 className='font-semibold'>UPLOAD LOGO</h1>
      </div>
    </div>
  );
}

export default LogoUploader;

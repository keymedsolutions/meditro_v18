export default function MaintenancePage() {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-w-full  tw-text-gray-800">
      <div className="tw-text-center tw-max-w-md tw-p-6 tw-rounded-2xl tw-bg-white">
        <h1 className="tw-text-4xl tw-font-bold tw-mb-4">🚧 Site Under Maintenance</h1>
        <p className="tw-text-lg tw-mb-6">
          We’re working hard to bring you a better experience.  
          Our site is temporarily unavailable, but we’ll be back very soon.  
        </p>
        <div className="tw-inline-block tw-px-6 tw-py-3 tw-rounded-full tw-bg-blue-600 tw-text-white tw-font-medium tw-shadow hover:tw-bg-blue-700 tw-transition">
          Thank you for your patience 💙
        </div>
      </div>
    </div>
  );
}

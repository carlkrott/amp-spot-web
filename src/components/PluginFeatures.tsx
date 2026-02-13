interface PluginFeaturesProps {
  features: string[];
}

export function PluginFeatures({ features }: PluginFeaturesProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="h-5 w-5 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';

interface TabProps {
  content: React.ReactNode;
  practice: {
    problems: Array<{
      title: string;
      difficulty: 'Easy' | 'Medium' | 'Hard';
      platform: 'LeetCode' | 'GeeksforGeeks' | 'AlgoExpert';
      url: string;
      description: string;
    }>;
  };
  resources: {
    videos: Array<{
      title: string;
      url: string;
      duration: string;
      platform: string;
    }>;
    articles: Array<{
      title: string;
      url: string;
      author: string;
      platform: string;
    }>;
    visualizations: Array<{
      title: string;
      url: string;
      description: string;
    }>;
  };
}

export default function CourseTabs({ content, practice, resources }: TabProps) {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="mt-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {['content', 'practice', 'resources'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'content' && (
          <div className="prose max-w-none">{content}</div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-8">
            {practice.problems.map((problem, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {problem.title}
                  </h3>
                  <span className={`
                    px-2 py-1 text-sm rounded-full
                    ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}
                  `}>
                    {problem.difficulty}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{problem.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{problem.platform}</span>
                  <a
                    href={problem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Solve Problem →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-12">
            {/* Videos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Tutorials</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {resources.videos.map((video, idx) => (
                  <a
                    key={idx}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900">{video.title}</h4>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span>{video.platform}</span>
                      <span className="mx-2">•</span>
                      <span>{video.duration}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles & Tutorials</h3>
              <div className="space-y-4">
                {resources.articles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900">{article.title}</h4>
                    <div className="mt-2 text-sm text-gray-500">
                      By {article.author} on {article.platform}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Visualizations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visualizations</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {resources.visualizations.map((viz, idx) => (
                  <a
                    key={idx}
                    href={viz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900">{viz.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{viz.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
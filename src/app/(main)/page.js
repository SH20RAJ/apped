import HeroSection from './_components/HeroSection';
import TopApps from './_components/TopApps';
import CategorySection from './_components/CategorySection';
import gplay from 'google-play-scraper';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Top Download Games Section */}
      <section className="py-8">
        <TopApps 
          category={gplay.category.GAME} 
          collection={gplay.collection.TOP_FREE}
          title="Top Download Games" 
          num={8}
          showRating={true}
          showDeveloper={true}
        />
      </section>

      {/* Game Categories */}
      <CategorySection 
        categories={[
          { name: 'Action', icon: '🎮' },
          { name: 'Simulation', icon: '🚗' },
          { name: 'Arcade', icon: '🕹️' },
          { name: 'Adventure', icon: '🗺️' },
          { name: 'Sports', icon: '⚽' },
          { name: 'Casual', icon: '🎲' }
        ]}
        type="games"
      />

      {/* Top Download Apps Section */}
      <section className="py-8">
        <TopApps 
          category={gplay.category.APPLICATION}
          collection={gplay.collection.TOP_FREE}
          title="Top Download Apps"
          num={8}
          showRating={true}
          showDeveloper={true}
        />
      </section>

      {/* App Categories */}
      <CategorySection 
        categories={[
          { name: 'Tools', icon: '🔧' },
          { name: 'Entertainment', icon: '🎬' },
          { name: 'Video Players & Editors', icon: '📹' },
          { name: 'Communication', icon: '💬' },
          { name: 'Social', icon: '👥' },
          { name: 'Productivity', icon: '📝' }
        ]}
        type="apps"
      />

      {/* Popular Categories */}
      <section className="py-8">
        <TopApps
          category={gplay.category.COMMUNICATION}
          title="Communication Apps"
          num={6}
        />
        <TopApps
          category={gplay.category.SOCIAL}
          title="Social Apps"
          num={6}
        />
      </section>
    </div>
  );
}

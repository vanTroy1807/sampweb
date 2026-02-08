import Image from 'next/image';

// Placeholder helper since we don't have the actual assets
const PlaceholderImage = ({ text }: { text: string }) => (
    <div className="w-full h-full bg-gray-800 flex items-center justify-center min-h-[300px] text-gray-500 rounded-xl border border-gray-700">
        <span className="text-lg font-medium">{text}</span>
    </div>
);

// Since assets are missing, we'll implement a safe Image wrapper that falls back if needed,
// but for now, we'll primarily use divs with text or placeholders.
// If you add the assets later, you can uncomment the Image components.

export default function Gallery() {
    return (
        <section id="pictures-section" className="w-full py-16 sm:py-24 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Gallery</h2>
                    <p className="text-lg text-gray-400 mt-2">
                        A collection of moments from Gangtok.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Gallery Unit 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Gangtok Scene 1" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 2" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 3" />
                            </div>
                        </div>
                        <div className="prose prose-invert prose-lg">
                            <h3>The Sky & The Valley</h3>
                            <p>
                                The journey begins with breathtaking views, where the sky meets
                                the earth in a spectacular display of nature's grandeur. Each
                                turn reveals a new perspective, a different shade of green and
                                blue.
                            </p>
                        </div>
                    </div>

                    {/* Gallery Unit 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-invert prose-lg lg:order-last">
                            <h3>Gangtok</h3>
                            <p>
                                Nestled within the mountains lies a city that blends modern life
                                with ancient traditions. The architecture tells a story of
                                culture, resilience, and harmony with the surrounding landscape.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Gangtok Scene 4" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 5" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 6" />
                            </div>
                        </div>
                    </div>

                    {/* Gallery Unit 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Scene 7" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 8" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 9" />
                            </div>
                        </div>
                        <div className="prose prose-invert prose-lg">
                            <h3>Cultural Threads</h3>
                            <p>
                                Discover the vibrant culture woven into the fabric of daily life.
                                From colorful prayer flags to serene monasteries, every corner
                                holds a piece of the region's rich spiritual heritage.
                            </p>
                        </div>
                    </div>

                    {/* Gallery Unit 4 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-invert prose-lg lg:order-last">
                            <h3>Singtam</h3>
                            <p>
                                Moments of peace by the water, where the reflections tell a story
                                of tranquility. The flowing rivers are the lifeblood of this
                                serene paradise.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Scene 10" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 11" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scene 12" />
                            </div>
                        </div>
                    </div>

                    {/* Gallery Unit 5 - Tech */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Tech 2" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Tech 1" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Tech 3" />
                            </div>
                        </div>
                        <div className="prose prose-invert prose-lg">
                            <h3>5G Technologies</h3>
                            <p>
                                Development and research of 5G technologies, a digital future
                                being made amidst the lap of the Lesser Himalayas
                            </p>
                        </div>
                    </div>

                    {/* Gallery Unit 6 - Scenic */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-invert prose-lg lg:order-last">
                            <h3>Majitar</h3>
                            <p>
                                Nestled in the lush hills of Sikkim, blends tranquil riverscapes
                                with a vibrant student-driven energy, where tradition meets quiet
                                modernity.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Scenic 3" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scenic 1" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Scenic 2" />
                            </div>
                        </div>
                    </div>

                    {/* Gallery Unit 7 - Family */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 gallery-image-wrapper aspect-video">
                                <PlaceholderImage text="Fam 2" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Fam 3" />
                            </div>
                            <div className="gallery-image-wrapper aspect-square">
                                <PlaceholderImage text="Fam 1" />
                            </div>
                        </div>
                        <div className="prose prose-invert prose-lg">
                            <h3>All with Family</h3>
                            <p>
                                It's not often we get to experince such scenic beauty with our loved ones, but when we
                                can it becomes something special
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

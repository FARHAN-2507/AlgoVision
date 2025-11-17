import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Code, PlayCircle, Share2 } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <PlayCircle className="h-8 w-8 text-primary" />,
    title: 'Interactive Visualization',
    description: 'Watch algorithms come to life with step-by-step animations. Control the flow with play, pause, and step controls.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Live Code Editor',
    description: 'Edit and run your own code snippets in JavaScript or Python. See your changes reflected in the visualization instantly.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: 'Save & Share',
    description: 'Save your visualizations and code to your profile. Share your algorithm runs with a unique link.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Visualize Algorithms, Master Code.
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  AlgoVision brings algorithms to life. Edit code, see it run step-by-step, and understand complex data structures like never before.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/dashboard">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-2xl">
                 {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose AlgoVision?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                AlgoVision provides the tools you need to deeply understand and experiment with algorithms in an interactive and engaging way.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="flex flex-col items-start p-6 text-left transition-transform transform hover:-translate-y-2">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-headline text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-24 lg:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6 grid items-center justify-center gap-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Dive In?
            </h2>
            <p className="text-muted-foreground">
              Start visualizing your first algorithm today. It's free to get started.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/dashboard">Launch AlgoVision</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlgoVision. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

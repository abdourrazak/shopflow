import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Store, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 bg-background">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
          Shopflow SaaS v1.0
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Gérez toutes vos boutiques <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            depuis une seule interface
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl">
          La plateforme SaaS complète pour la gestion commerciale multi-boutiques. 
          Suivez vos ventes, vos stocks et vos clients en temps réel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="gap-2">
            Tableau de bord <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 text-left">
          <Card>
            <CardHeader>
              <Store className="w-10 h-10 mb-2 text-blue-500" />
              <CardTitle>Multi-Boutiques</CardTitle>
              <CardDescription>Gérez plusieurs points de vente avec une synchronisation parfaite.</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <ShoppingBag className="w-10 h-10 mb-2 text-purple-500" />
              <CardTitle>Gestion des Stocks</CardTitle>
              <CardDescription>Suivi précis des inventaires, alertes de rupture et transferts.</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="w-10 h-10 mb-2 text-green-500" />
              <CardTitle>CRM Intégré</CardTitle>
              <CardDescription>Fidélisez vos clients et suivez leurs historiques d'achats.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

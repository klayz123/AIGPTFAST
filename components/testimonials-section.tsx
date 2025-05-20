import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by thousands of businesses</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Sarah Johnson" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO, TechStart</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                "This platform has completely transformed how we operate. The analytics tools alone have helped us
                increase our revenue by 40% in just three months."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Michael Chen" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Michael Chen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO, GrowthLabs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                "The integration was seamless, and the customer support is exceptional. We've been able to scale our
                operations without any technical hiccups."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

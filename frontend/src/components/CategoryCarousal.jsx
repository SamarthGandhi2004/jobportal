import React from 'react';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from './ui/carousel';
import { Button } from './ui/button';

const CategoryCarousel = () => {
    const categories = [
        "Frontend Developer",
        "Backend Developer",
        "Data Science",
        "Graphic Designer",
        "FullStack Developer"
    ];

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-10">
                <CarouselContent>
                    {
                        categories.map((category, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Button variant="outline" className="rounded-full">{category}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious>
                    <Button className="rounded-full">{"<"}</Button>
                </CarouselPrevious>
                <CarouselNext>
                    <Button className="rounded-full">{">"}</Button>
                </CarouselNext>
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;

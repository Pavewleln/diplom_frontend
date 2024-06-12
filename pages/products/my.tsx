import { MyProductsSkeleton } from "@/components/ui/Skeletons/MyProductsSkeleton";
import { ProductsService } from "@/services/products/products.service";
import { IProduct } from "@/services/products/products.interface";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/Home/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { Back } from "@/components/ui/Back";

const My = () => {
    const { data, isLoading } = useQuery(
        ["get all my products"],
        () => ProductsService.myProducts(),
        {
            select: ({ data }) => data as IProduct[],
            staleTime: 12000
        }
    );
    return (
        <MainLayout title={"Мои продукты"}>
            <Back />
            {isLoading ? (
                <MyProductsSkeleton />
            ) : (
                <div>
                    {data && data.length ? (
                        <div
                            className={
                                "flex items-center flex-wrap justify-center"
                            }
                        >
                            {data.map(product => (
                                <Card
                                    key={product._id}
                                    product={product}
                                    method={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h1>Нет своих товаров</h1>
                        </div>
                    )}
                </div>
            )}
        </MainLayout>
    );
};
export default My;

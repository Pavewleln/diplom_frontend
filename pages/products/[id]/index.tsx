import { ProductsService } from "@/services/products/products.service";
import { Comments } from "@/components/ui/FullInfoProduct/Comments";
import { IProduct } from "@/services/products/products.interface";
import { MainLayout } from "@/components/layouts/MainLayout";
import { formatPrice } from "@/utils/formatPrice";
import { classNames } from "@/utils/classNames";
import { Back } from "@/components/ui/Back";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Product = ({ data }: { data: IProduct }) => {
    const [tab, setTab] = useState(0);

    const isActive = (index: number) => {
        if (tab === index) return " active";
        return "";
    };
    const { description, price, title, images, type, _id } = data;
    return (
        <MainLayout title={data ? data.title : ""}>
            <Back />
            {data ? (
                <>
                    <section className="mx-auto bg-white dark:bg-gray-900 flex items-center justify-around flex-col md:flex-row p-2">
                        {images.length ? (
                            <div className="p-5">
                                <Image
                                    loader={() => images[tab]}
                                    src={images[tab]}
                                    alt="Product"
                                    width={500}
                                    height={500}
                                    className="m-5 w-full max-w-[500px] h-auto"
                                />
                                {images.length > 1 && (
                                    <div className="flex items-center justify-center mt-4">
                                        {images.map((img, index) => (
                                            <Image
                                                loader={() => img}
                                                key={index}
                                                src={img}
                                                alt={img}
                                                className={classNames(
                                                    "rounded-lg border p-2 mx-1 cursor-pointer",
                                                    isActive(index)
                                                )}
                                                width={100}
                                                height={100}
                                                onClick={() => setTab(index)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="m-5 w-full max-w-[500px] min-w-[300px] md:min-w-[350px] min-h-[300px] h-max sm:h-[300px] md:h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 dark:bg-gray-600">
                                Нет фото
                            </div>
                        )}
                        <div className="lg:py-16 w-full max-w-lg">
                            <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
                                {title}
                            </h2>
                            <div
                                className={"flex items-center justify-between"}
                            >
                                <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
                                    {formatPrice(price)}
                                </p>
                            </div>
                            <dl>
                                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                                    Детали
                                </dt>
                                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                    {description}
                                </dd>
                            </dl>
                            <dl className="flex items-center space-x-6">
                                <div>
                                    <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                                        Категория
                                    </dt>
                                    <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                        {type}
                                    </dd>
                                </div>
                            </dl>
                            <Link href="tel:+1234567890">
                                <p className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all">
                                    Подготовить документы
                                </p>
                            </Link>
                        </div>
                    </section>
                    <Comments productId={_id} />
                </>
            ) : (
                <h2>Ошибка. Такой продукт не найден</h2>
            )}
        </MainLayout>
    );
};
export const getServerSideProps = async ({
    query
}: {
    query: { id: string };
}) => {
    try {
        const { data } = await ProductsService.getById(query.id);
        return {
            props: { data }
        };
    } catch (err) {
        console.log(err);
    }
};
export default Product;

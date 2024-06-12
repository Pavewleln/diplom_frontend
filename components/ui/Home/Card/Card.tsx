import { IProduct } from "@/services/products/products.interface";
import { formatPrice } from "@/utils/formatPrice";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsService } from "@/services/products/products.service";
import { useRouter } from "next/router";

export const Card: FC<{ product: IProduct; method: boolean }> = ({
    product,
    method
}) => {
    const { _id, price, title, images } = product;
    const router = useRouter();

    const handleDelete = async () => {
        await ProductsService.delete(_id);
        router.reload();
    };

    return (
        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 hover:shadow-md transition-all">
            <Link href={`/products/${_id}`}>
                <div className="w-full h-auto overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-600">
                    {images.length ? (
                        <Image
                            loader={() => images[0]}
                            className="object-cover w-92 h-60" // Задаем фиксированные размеры
                            src={images[0]}
                            alt="Product"
                            width={320} // Ширина изображения
                            height={240} // Высота изображения
                        />
                    ) : (
                        <div className="flex items-center justify-center w-80 h-60 text-gray-400">
                            нет фото
                        </div>
                    )}
                </div>
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-md font-bold text-gray-900 dark:text-white">
                        {formatPrice(price)}
                    </span>
                </div>
                {method && (
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDelete}
                    >
                        Удалить карточку
                    </button>
                )}
            </div>
        </div>
    );
};

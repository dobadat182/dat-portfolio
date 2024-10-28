import { H1, H3 } from "@/components/common/Typo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const LeftSide = () => (
  <div className="w-1/4 flex-none">
    <div className="sticky top-10 ml-auto flex max-w-fit flex-col gap-5 rounded-xl border p-4">
      <div className="">
        <IconBrandFacebook />
      </div>
      <div className="">
        <IconBrandGithub />
      </div>
      <div className="">
        <IconBrandLinkedin />
      </div>
    </div>
  </div>
);

const RightSide = () => (
  <div className="w-1/4 flex-none pr-4 xl:pr-0">
    <div className="sticky top-10 max-w-xs rounded-xl border p-4">
      <H3>Tin mới nhất</H3>
      <div className="mt-3 border-b-[1px]"></div>

      <article className="border-b-[1px] py-3">
        <p className="text-sm">Typescript Event Types trong React</p>
      </article>

      <article className="border-b-[1px] py-3">
        <p className="text-sm">
          Khắc phục Hydration Mismatches với useSyncExternalStore trong React
        </p>
      </article>

      <article className="border-b-[1px] py-3">
        <p className="text-sm">Xây dựng chức năng kéo thả File trong React</p>
      </article>

      <article className="py-3">
        <p className="text-sm">Xây dựng Confirm Dialog trong React</p>
      </article>
    </div>
  </div>
);

const page = () => {
  return (
    <div className="flex flex-row gap-10 py-20">
      <LeftSide />

      <div className="h-[200vh] flex-auto">
        <div className="flex flex-col gap-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  Typescript Event Types trong React...
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-4">
            <div className="inline-block rounded-xl bg-zinc-200 px-3 py-1 text-sm">
              NextJS
            </div>
            <div className="inline-block rounded-xl bg-zinc-200 px-3 py-1 text-sm">
              Tech
            </div>
            <div className="inline-block rounded-xl bg-zinc-200 px-3 py-1 text-sm">
              Wordpress
            </div>
            <div className="inline-block rounded-xl bg-zinc-200 px-3 py-1 text-sm">
              Typescript
            </div>
          </div>
          <H1>Typescript Event Types trong React</H1>
          <div>
            <b>Published at:</b> 14/02/2024
          </div>
          <div>
            Khi bạn làm việc với Typescript trong React, chắc hẳn bạn sẽ thường
            bắt gặp kiểu lỗi như thế này:
          </div>
          <div>
            Không phải lúc nào cũng biết rõ kiểu type chúng ta nên để cho e bên
            trong hàm onChange là gì. Nó cũng xảy ra tương tự với onClick,
            onSubmit, etc… Nhưng may mắn thay là chúng ta vẫn có một vài cách
            giải quyết
          </div>
        </div>
      </div>

      <RightSide />
    </div>
  );
};

export default page;

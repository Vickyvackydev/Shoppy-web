// import { v2 as cloudinary } from "cloudinary";
// import { NextResponse } from "next/server";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(request: Request) {
//   const { path } = await request.json();
//   // const formData = new FormData();
//   // const file = formData.get("file");

//   if (!path) {
//     return NextResponse.json(
//       { message: "Image file uploaded" },
//       { status: 400 }
//     );
//   }

//   try {
//     const options = {
//       use_filename: true,
//       unique_filename: false,
//       overwrite: true,
//       transformation: [{ width: 1000, height: 752, crop: "scale" }],
//     };

//     const result = await cloudinary.uploader.upload(path, options);

//     return NextResponse.json(result, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ message: error?.message }, { status: 500 });
//   }
// }

// import { v2 as cloudinary } from "cloudinary";
// import { NextResponse } from "next/server";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function POST(request: Request) {
//   try {
//     const formData = await request.formData();
//     const file: any = formData.get("file");

//     if (!file) {
//       return NextResponse.json(
//         { message: "No file uploaded" },
//         { status: 400 }
//       );
//     }

//     const options = {
//       use_filename: true,
//       unique_filename: false,
//       overwrite: true,
//       transformation: [{ width: 1000, height: 752, crop: "scale" }],
//     };

//     const result = await cloudinary.uploader.upload(file.path, options);

//     return NextResponse.json(result, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ message: error?.message }, { status: 500 });
//   }
// }

import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["nextjs-server-actions-upload-sneakers"],
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{ width: 1000, height: 752, crop: "scale" }],
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json(
      { message: error?.message || "Server error" },
      { status: 500 }
    );
  }
}

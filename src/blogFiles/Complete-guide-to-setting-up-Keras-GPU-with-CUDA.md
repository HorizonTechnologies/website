This is our first guest post. So, special thanks to [Shalini Singh](https://twitter.com/shalinisparmar) who is working as a Software Engineer with Morningstart Inc. Her interests include Data Analysis, Python and Building models for financial products.

When I first got into machine learning, it took me a complete day to finally figure out how to properly set up my TensorFlow environment. Out of frustration, I decided to write this post to help anyone going through the process and save you a couple of StackOverflow searches.

Please refer to this [link](https://www.python.org/downloads/) for python installation and [this](https://www.datacamp.com/community/tutorials/installing-anaconda-windows) for anaconda setup. I am listing down the steps that worked for me and errors that I got along the way and how I solved them.

1. ***Creating a Conda environment***

```
conda create — name your_environment_name_here python=3.6
```

Now ideally latest python version should have been used but I have created an environment with Python version 3.6 because it is stable and compatible with a lot of TensorFlow dependencies and this has worked for everyone else in my team too. I faced some version related errors with python version 3.7 and tensorflow 2.0, one of the errors being

```
AttributeError: module ‘tensorflow’ has no attribute ‘get_default_graph
```

So I installed the more stable version of tensorflow i.e tensorflow-1.14.0. This might not be the best way to do it, but it sure was the quickest one and the one without hassle.

2. ***Ideally the next step would be to install tensorflow-gpu and then keras-gpu, but I would suggest an intermediate step in between to save you from errors like this.***

```
cudaGetDevice() failed. Status: CUDA driver version is insufficient for CUDA runtime version
```

The intermediate step would be visiting the NVIDIA developer site and updating or downloading the CUDA Toolkit.

![CUDA-toolkit](/blog-images/CUDA-toolkit.jpg)

Now I struggled a lot to find the right CUDA version that is compatible with the python version and Tensorflow version. So I am posting it [here](https://www.tensorflow.org/install/source#tested_build_configurations).

![GPU](/blog-images/GPU.jpg)
The following versioning setup has worked for me

- tensorflow_gpu-1.14.0
- python version- 3.6
- cuDNN version -7.4
- CUDA version-10.0

Download the NVIDIA cuDNN [here](https://developer.nvidia.com/cudnn). And to download the cuDNN it requires membership in the NVIDIA Developer Program. Please join the program to access this material. You can make an account in 2 min with entering some basic details.

![NVIDIA-developer-program](/blog-images/NVIDIA-developer-program.jpg)

3. ***After you have downloaded and extracted the CUDA toolkit, add these three cuDNN paths to the path system environment variable***

Set the following in the path variable

```
cudnn-10.0-windows10-x64-v7.4.2.24\cuda\bin
cudnn-10.0-windows10-x64-v7.4.2.24\cuda\include
cudnn-10.0-windows10-x64-v7.4.2.24\cuda\lib\x64
```

4. ***Now you are all set to install tensorflow-gpu and keras-gpu with conda. Activate the conda environment that you have created in the first step***

```
conda activate enivironment_name
conda install tensorflow-gpu==1.14
conda install keras-gpu
```

Now it would take some time to get installed and there are multiple packages that would get installed so do not freak out. Keep Calm and wait for it to be completely done.

![CUDA-install-packages](/blog-images/CUDA-install-packages.png)

5. ***The last step would be to restart your system before you start working to play safe.***

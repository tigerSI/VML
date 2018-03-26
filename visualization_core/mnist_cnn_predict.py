from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt

from mnist_cnn_model import cnn_model_fn

#tf.logging.set_verbosity(tf.logging.INFO)

def main(unused_argv):
  # Create the Estimator
  mnist_classifier = tf.estimator.Estimator(
      model_fn=cnn_model_fn, model_dir="mnist_model")

  # Predict the input
  names = mnist_classifier.get_variable_names()
  print(names)

  conv2d_kernel = mnist_classifier.get_variable_value('conv2d/kernel')
  print(conv2d_kernel.shape)
  data = []

  for i in range(32):
      data.append(list())
      for j in range(5):
          data[i].append(list())
          for k in range(5):
              data[i][j].append(conv2d_kernel[j][k][0][i])

  rows = 4
  cols = 8
  current = 1
  for i in data:
      plt.subplot(rows, cols , current)
      plt.imshow(i, cmap="gray")
      current += 1
  plt.show()


if __name__ == "__main__":
  tf.app.run()